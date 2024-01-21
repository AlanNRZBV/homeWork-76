'use client'
import React from "react";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {ThemeProvider} from "@mui/system";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Container, CssBaseline} from "@mui/material";
import theme from "@/theme";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const queryClient = new QueryClient()

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline>
            <html lang="en">
            <body>
            <header>
            </header>
            <main>
              <Container maxWidth="xl">
                {children}
              </Container>
            </main>
            </body>
            </html>
          </CssBaseline>
        </QueryClientProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
