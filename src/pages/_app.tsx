import "src/styles/global.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
        fontFamily: "yuGothic,Avenir Next",
      }}
    >
      <Component {...pageProps} />)
    </MantineProvider>
  );
}

export default MyApp;
