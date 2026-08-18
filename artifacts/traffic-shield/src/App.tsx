import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { LanguageProvider } from "@/lib/i18n";
import { DemoModalProvider } from "@/components/DemoModal";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Technology } from "@/components/sections/Technology";
import { UseCases } from "@/components/sections/UseCases";
import { FoundingTeam } from "@/components/sections/FoundingTeam";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Technology />
        <UseCases />
        <FoundingTeam />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <DemoModalProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Router />
            </WouterRouter>
            <Toaster />
            <Analytics />
          </DemoModalProvider>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
