import "./App.css";

const messageFlow = [
  { id: 1, from: "UE", to: "gNB", text: "PDU Session Establishment Request", proto: "NAS", plane: "CP" },
  { id: 2, from: "gNB", to: "AMF", text: "UL NAS Transport", proto: "NGAP", plane: "CP" },
  { id: 3, from: "AMF", to: "SMF", text: "Nsmf_PDUSession_CreateSMContext", proto: "SBI", plane: "CP" },
  { id: 4, from: "SMF", to: "UPF", text: "PFCP Session Establishment", proto: "PFCP", plane: "CP" },
  { id: 5, from: "UPF", to: "SMF", text: "PFCP Session Establishment Response", proto: "PFCP", plane: "CP" },
  { id: 6, from: "SMF", to: "AMF", text: "Nsmf_PDUSession_CreateSMContext Response", proto: "SBI", plane: "CP" },
  { id: 7, from: "AMF", to: "gNB", text: "PDU Session Resource Setup Request", proto: "NGAP", plane: "CP" },
  { id: 8, from: "gNB", to: "UE", text: "PDU Session Establishment Accept", proto: "NAS", plane: "CP" },
  { id: 9, from: "UE", to: "UPF", text: "User Data (IP Packets)", proto: "GTP-U", plane: "UP" }
];
const flowData = [
  { id: "01", from: "UE", to: "gNB", msg: "Registration Request", proto: "NAS" },
  { id: "02", from: "gNB", to: "AMF", msg: "Initial UE Message", proto: "NGAP" },
  { id: "03", from: "AMF", to: "gNB", msg: "Authentication Request", proto: "NGAP" },
  { id: "04", from: "gNB", to: "UE", msg: "Authentication Request", proto: "NAS" },
  { id: "05", from: "UE", to: "gNB", msg: "Authentication Response", proto: "NAS" },
  { id: "06", from: "gNB", to: "AMF", msg: "Authentication Response", proto: "NGAP" },
  { id: "07", from: "AMF", to: "gNB", msg: "Registration Accept", proto: "NGAP" },
  { id: "08", from: "gNB", to: "UE", msg: "Registration Accept", proto: "NAS" },
];


export default function App() {
  return (
    <div className="app">
      <h1 className="heading">5G SIGNALING FLOW DASHBOARD</h1>

      {/* ===== ARCHITECTURE ===== */}
      <section className="architecture">
        <h2>5G NETWORK ARCHITECTURE</h2>

        <div className="nodes">
          <Node title="UE" subtitle="User Equipment" color="purple" />
          <Node title="gNB" subtitle="gNodeB" color="orange" />
          <Node title="AMF" subtitle="Access & Mobility" color="blue" />
          <Node title="SMF" subtitle="Session Manager" color="pink" />
          <Node title="UPF" subtitle="User Plane Function" color="green" />
        </div>

        <div className="plane">
          <span className="pill cp">● Control Plane</span>
          <span className="pill up">● User Plane</span>
        </div>
      </section>

      {/* ===== PROCEDURE ===== */}
      <section className="procedure">
        <h3>SELECT PROCEDURE</h3>

        <div className="procedure-cards">
          <div className="proc-card">
            <h4>5G Registration</h4>
            <p>This happens when you turn on mobile data.</p>
            <span>8 steps</span>
          </div>

          <div className="proc-card active">
            <h4>PDU Session Establishment</h4>
            <p>This happens when you start using the internet.</p>
            <span>9 steps</span>
          </div>
        </div>
      </section>

      {/* ===== CONTROLS ===== */}
      <section className="controls">
        <h4>MESSAGE FLOW: <b>PDU SESSION ESTABLISHMENT</b></h4>
        <div className="buttons">
          <button className="play">▶ PLAY</button>
          <button className="reset">⟳ Reset</button>
        </div>
      </section>

      <section className="container">
         {flowData.map((item) => (
        <div className="flow-row" key={item.id}>
          <div className="step">{item.id}</div>

          <div className="nodes">
            <span className="node">{item.from}</span>
            <span className="arrow">⟶</span>
            <span className="node">{item.to}</span>
          </div>

          <div className="message">{item.msg}</div>

          <div className="tags">
            <span className="tag proto">{item.proto}</span>
            <span className="tag cp">CP</span>
          </div>
        </div>
      ))}
      </section>
      <section className="flow">
        {messageFlow.map((m) => (
          <div className="flow-row" key={m.id}>
            <div className="step">{m.id}</div>

            <div className="flow-main">
              <span className="node-name">{m.from}</span>
              <span className="arrow">──</span>
              <span className="node-name">{m.to}</span>
              <span className="msg">{m.text}</span>
            </div>

            <div className="tags">
              <span className="tag">{m.proto}</span>
              <span className={`tag ${m.plane === "CP" ? "cp" : "up"}`}>
                {m.plane}
              </span>
            </div>
          </div>
        ))}
        
      </section>
      
      
      <section className="plane-info">
       
  <div className="plane-card cp-card">
    <div className="plane-header">
      <span className="dot cp-dot"></span>
      <h3>Control Plane</h3>
      <span className="plane-badge cp">CP</span>
    </div>

    <p>
      Handles signaling and control messages. This is where decisions are made:
      authentication, registration, session setup. No actual user data flows here.
    </p>
  </div>

  <div className="plane-card up-card">
    <div className="plane-header">
      <span className="dot up-dot"></span>
      <h3>User Plane</h3>
      <span className="plane-badge up">UP</span>
    </div>

    <p>
      Carries actual user data: your YouTube videos, Instagram photos,
      WhatsApp messages. This is the real internet traffic flowing
      through the network.
    </p>
  </div>
</section>


      <footer class="footer">
        <div >
      <p class="footer-disclaimer">
        Valid for educational and demonstration purposes only for users accessing
        the 5G Signaling Flow Dashboard. The dashboard content becomes available upon
        project access and may take up to 48 hours to reflect updates. Displays
        predefined 5G procedures such as Registration and PDU Session Establishment
        using simulated signaling data. No real network traffic, live packet capture,
        or actual telecom infrastructure is involved. Data shown does not represent
        real subscriber information. Intended strictly for learning and visualization.
        Cannot be used for commercial or production environments. Subject to academic
        project scope. Access valid until 1/5/2026.
          </p>
          <hr />
    </div>

  <div class="footer-main">

    <div class="footer-columns">

      <div class="footer-col">
        <h4>About Project</h4>
        <ul>
          <li>Project Overview</li>
          <li>5G Architecture</li>
          <li>Signaling Procedures</li>
          <li>Supported Protocols</li>
          <li>System Limitations</li>
          <li>Documentation</li>
          <li>Contact Team</li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Dashboard</h4>
        <ul>
          <li>Registration Flow</li>
          <li>PDU Session Flow</li>
          <li>Message Sequence</li>
          <li>Control Plane</li>
          <li>User Plane</li>
          <li>Error Scenarios</li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Technical Details</h4>
        <ul>
          <li>NAS Signaling</li>
          <li>NGAP Messages</li>
          <li>PFCP Procedures</li>
          <li>AMF, SMF, UPF</li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>For Students</h4>
        <ul>
          <li>Learning Resources</li>
          <li>Use Case Examples</li>
          <li>Mini Projects</li>
          <li>Academic Use</li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Help & Support</h4>
        <ul>
          <li>How to Use</li>
          <li>FAQs</li>
          <li>Known Issues</li>
          <li>Feedback</li>
          <li>Terms of Use</li>
        </ul>
      </div>

    </div>

   
    
  </div>

  <div class="footer-bottom">
    

   
          <div className="link">
            <a href="http://localhost:5173/">Privacy Notice</a><br />
      <a href="http://localhost:5173/">Academic Use Policy</a><br />
      <a href="http://localhost:5173/">Terms of Use</a>
   
      </div>

    <p class="copyright">
      © 2025 5G Signaling Flow Dashboard. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  );
}

function Node({ title, subtitle, color }) {
  return (
    <div className={`node ${color}`}>
      <div className="circle"></div>
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  );
}