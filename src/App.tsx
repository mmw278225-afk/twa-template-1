import { useState } from "react";
import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
import "@twa-dev/sdk";

const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

function App() {
  const [tab, setTab] = useState("home");
  
  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
          <FlexBoxRow>
            <TonConnectButton />
            <Button>
              {network
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
            </Button>
          </FlexBoxRow>
          {tab === "home" && <Counter />}
          {tab === "transfer" && <TransferTon />}
{tab === "jetton" && <Jetton />}
          <div style={{
  display: 'flex', 
  justifyContent: 'space-around', 
  padding: '10px', 
  background: '#161618', 
  borderTop: '1px solid #333',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0
}}>
  <button onClick={() => setTab("home")} style={{ color: tab === "home" ? "#00f0ff" : "#aaa" }}>
    🔢 <br/> العداد
  </button>
  <button onClick={() => setTab("transfer")} style={{ color: tab === "transfer" ? "#00f0ff" : "#aaa" }}>
    💸 <br/> التحويل
  </button>
  <button onClick={() =>
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
