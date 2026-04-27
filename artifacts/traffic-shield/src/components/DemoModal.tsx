import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { useForm } from "react-hook-form";
import { Check, Loader2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCreateDemoRequest } from "@workspace/api-client-react";
import { useI18n } from "@/lib/i18n";

type DemoModalContextValue = {
  open: () => void;
  close: () => void;
};

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function useDemoModal(): DemoModalContextValue {
  const ctx = useContext(DemoModalContext);
  if (!ctx)
    throw new Error("useDemoModal must be used inside <DemoModalProvider>");
  return ctx;
}

type FormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { t, locale, dir } = useI18n();
  const mutation = useCreateDemoRequest();

  const form = useForm<FormValues>({
    defaultValues: { name: "", email: "", company: "", message: "" },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleClose = (next: boolean) => {
    setIsOpen(next);
    if (!next) {
      // small delay so users see end state
      setTimeout(() => {
        setSubmitted(false);
        setErrorMsg(null);
        reset();
      }, 250);
    }
  };

  const onSubmit = (values: FormValues) => {
    setErrorMsg(null);
    mutation.mutate(
      { data: { ...values, locale } },
      {
        onSuccess: () => {
          setSubmitted(true);
        },
        onError: () => {
          setErrorMsg(t.demoModal.error.body);
        },
      },
    );
  };

  const fieldClass =
    "w-full rounded-md border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-gold/50 focus:ring-2 focus:ring-gold/20";
  const labelClass =
    "block text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground mb-2 font-mono";
  const errorClass = "mt-1.5 text-xs text-destructive-foreground/90 text-red-400";

  return (
    <DemoModalContext.Provider value={{ open, close }}>
      {children}
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent
          dir={dir}
          className="sm:max-w-lg border border-white/10 bg-[#0a0a0a] text-foreground p-0 overflow-hidden"
        >
          <button
            onClick={() => handleClose(false)}
            className="absolute top-4 end-4 rounded-full p-1.5 text-muted-foreground hover:text-foreground transition z-10"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          {!submitted ? (
            <div className="p-7 sm:p-8">
              <DialogHeader className="text-start">
                <div className="inline-flex items-center gap-2 mb-3 text-[10px] uppercase tracking-[0.25em] font-mono text-gold/80">
                  <span className="h-px w-6 bg-gold/40" />
                  Traffic Shield AI
                </div>
                <DialogTitle className="font-display text-2xl font-light tracking-tight">
                  {t.demoModal.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground mt-2">
                  {t.demoModal.subtitle}
                </DialogDescription>
              </DialogHeader>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-6 grid grid-cols-1 gap-4"
                noValidate
              >
                <div>
                  <label className={labelClass} htmlFor="demo-name">
                    {t.demoModal.fields.name}
                  </label>
                  <input
                    id="demo-name"
                    type="text"
                    className={fieldClass}
                    placeholder={t.demoModal.placeholders.name}
                    data-testid="demo-input-name"
                    {...register("name", {
                      required: t.demoModal.validation.name,
                      minLength: { value: 2, message: t.demoModal.validation.name },
                    })}
                  />
                  {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} htmlFor="demo-email">
                      {t.demoModal.fields.email}
                    </label>
                    <input
                      id="demo-email"
                      type="email"
                      className={fieldClass}
                      placeholder={t.demoModal.placeholders.email}
                      data-testid="demo-input-email"
                      {...register("email", {
                        required: t.demoModal.validation.email,
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: t.demoModal.validation.email,
                        },
                      })}
                    />
                    {errors.email && (
                      <p className={errorClass}>{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="demo-company">
                      {t.demoModal.fields.company}
                    </label>
                    <input
                      id="demo-company"
                      type="text"
                      className={fieldClass}
                      placeholder={t.demoModal.placeholders.company}
                      data-testid="demo-input-company"
                      {...register("company", {
                        required: t.demoModal.validation.company,
                      })}
                    />
                    {errors.company && (
                      <p className={errorClass}>{errors.company.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="demo-message">
                    {t.demoModal.fields.message}
                  </label>
                  <textarea
                    id="demo-message"
                    rows={4}
                    className={`${fieldClass} resize-none`}
                    placeholder={t.demoModal.placeholders.message}
                    data-testid="demo-input-message"
                    {...register("message", {
                      required: t.demoModal.validation.message,
                      minLength: { value: 10, message: t.demoModal.validation.message },
                    })}
                  />
                  {errors.message && (
                    <p className={errorClass}>{errors.message.message}</p>
                  )}
                </div>

                {errorMsg && (
                  <div className="rounded-md border border-red-500/30 bg-red-500/5 px-3 py-2 text-xs text-red-300">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  data-testid="demo-submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-black transition hover:bg-[#d6b15a] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t.demoModal.submitting}
                    </>
                  ) : (
                    t.demoModal.submit
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="p-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40">
                <Check className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-light tracking-tight">
                {t.demoModal.success.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto">
                {t.demoModal.success.body}
              </p>
              <button
                onClick={() => handleClose(false)}
                className="mt-7 inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-2.5 text-sm text-white/90 hover:border-gold/40 hover:text-white transition"
                data-testid="demo-success-close"
              >
                {t.demoModal.success.cta}
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </DemoModalContext.Provider>
  );
}
