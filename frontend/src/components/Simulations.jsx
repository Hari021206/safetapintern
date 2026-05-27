function Simulations() { 
const simulations = [ 
{ title: "💬 Chat Practice", text: "Learn safe messaging interactions" }, 
{ title: "💳 Payment Trainer", text: "Practice digital payments safely" }, 
{ title: "📧 Email Trainer", text: "Learn professional email basics" }, 
{ title: "🛡 Scam Detector", text: "Identify online scams and fraud" } 
]; 
return ( 
<section className="simulations" id="simulations" > 
<h2> Interactive Simulations </h2> 
<div className="simulation-grid"> 
{simulations.map((item, index) => ( 
<div className="simulation-card" key={index} > 
<h3>{item.title}</h3> 
<p>{item.text}</p> 
<button> Start Practice </button> 
</div> 
))} 
</div> 
</section> 
); 
} 
export default Simulations;