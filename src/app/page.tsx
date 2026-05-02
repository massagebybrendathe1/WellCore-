"use client";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [signed, setSigned] = useState(false);

  if (step === 3) return (
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f8fafc",fontFamily:"Georgia,serif"}}>
      <div style={{background:"white",borderRadius:"24px",padding:"40px",maxWidth:"400px",width:"100%",textAlign:"center",boxShadow:"0 20px 60px rgba(0,0,0,0.1)"}}>
        <div style={{fontSize:"48px",marginBottom:"16px"}}>🎉</div>
        <h1 style={{color:"#1e293b",marginBottom:"8px"}}>You're all set!</h1>
        <p style={{color:"#64748b"}}>Confirmation sent to {email}</p>
      </div>
    </div>
  );

  return (
    <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f8fafc",fontFamily:"Georgia,serif"}}>
      <div style={{background:"white",borderRadius:"24px",padding:"32px",maxWidth:"400px",width:"100%",boxShadow:"0 20px 60px rgba(0,0,0,0.1)"}}>
        <div style={{background:"#6EE7B7",borderRadius:"16px",padding:"16px",marginBottom:"24px"}}>
          <div style={{fontSize:"11px",color:"rgba(0,0,0,0.4)",fontWeight:"bold",letterSpacing:"0.1em",marginBottom:"4px"}}>WELLCORE</div>
          <div style={{fontWeight:"900",fontSize:"18px",color:"#1e293b"}}>Wellness Session Intake</div>
          <div style={{display:"flex",gap:"4px",marginTop:"12px"}}>
            {[0,1,2].map(i=><div key={i} style={{flex:1,height:"4px",borderRadius:"2px",background:i<=step?"#1e293b":"rgba(0,0,0,0.15)"}}/>)}
          </div>
        </div>

        {step===0 && <div>
          <h2 style={{color:"#1e293b",marginBottom:"8px"}}>Your Information</h2>
          <div style={{marginBottom:"12px"}}>
            <label style={{fontSize:"12px",color:"#64748b",display:"block",marginBottom:"4px"}}>Full Name</label>
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name" style={{width:"100%",border:"1.5px solid #e2e8f0",borderRadius:"10px",padding:"10px",fontSize:"14px",boxSizing:"border-box"}}/>
          </div>
          <div style={{marginBottom:"12px"}}>
            <label style={{fontSize:"12px",color:"#64748b",display:"block",marginBottom:"4px"}}>Email</label>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@company.com" type="email" style={{width:"100%",border:"1.5px solid #e2e8f0",borderRadius:"10px",padding:"10px",fontSize:"14px",boxSizing:"border-box"}}/>
          </div>
          <div style={{marginBottom:"20px"}}>
            <label style={{fontSize:"12px",color:"#64748b",display:"block",marginBottom:"4px"}}>Phone</label>
            <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+1 (555) 000-0000" type="tel" style={{width:"100%",border:"1.5px solid #e2e8f0",borderRadius:"10px",padding:"10px",fontSize:"14px",boxSizing:"border-box"}}/>
          </div>
        </div>}

        {step===1 && <div>
          <h2 style={{color:"#1e293b",marginBottom:"16px"}}>Consent & Waiver</h2>
          <div style={{background:"#f8fafc",borderRadius:"12px",padding:"16px",fontSize:"12px",color:"#64748b",lineHeight:"1.8",marginBottom:"16px",maxHeight:"200px",overflowY:"auto"}}>
            By proceeding, I voluntarily participate in wellness sessions provided through this corporate wellness program. These sessions are supplemental and do not replace professional medical or psychiatric care. All sessions are strictly confidential except where required by law. I consent to secure collection of my intake information for program coordination only.
          </div>
          <div onClick={()=>setSigned(true)} style={{border:`2px ${signed?"solid #10b981":"dashed #cbd5e1"}`,borderRadius:"16px",padding:"16px",background:signed?"#f0fdf4":"white",cursor:"pointer",textAlign:"center"}}>
            {signed ? <div style={{color:"#065f46",fontWeight:"bold"}}>✅ Signed by {name}</div> : <div style={{color:"#94a3b8"}}>✍️ Tap to sign digitally</div>}
          </div>
        </div>}

        <button onClick={()=>{
          if(step===0&&(!name||!email||!phone)){alert("Please fill in all fields");return;}
          if(step===1&&!signed){alert("Please sign the waiver");return;}
          setStep(s=>s+1);
        }} style={{width:"100%",background:"#1e293b",color:"white",fontWeight:"900",fontSize:"15px",padding:"16px",borderRadius:"16px",border:"none",cursor:"pointer",marginTop:"8px"}}>
          {step===0?"Continue to Waiver →":"Submit & Confirm ✓"}
        </button>
      </div>
    </div>
  );
}
