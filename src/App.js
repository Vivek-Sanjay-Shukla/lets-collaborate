import './App.css';
import Card from './components/Card';
import rp2 from "../src/images/rp2.jpg"
import p1 from "../src/images/p1.png"
import p2 from "../src/images/p2.jpg"
import p3 from "../src/images/p3.jpg"

function App() {
  return (
    <div className="full-section">

        <div className='header'>
          <h4>Let's Collaborate</h4>
        </div>

        <div className='main'>

           <div className='card'>
             <Card title = "AI + RPA is what we do" description = "Future-Proof your business. Drive efficiency, profitability and deliver on customer experience"
              Link="https://www.xivtech.io/services/AIandRPAautomation" LinkName = "AI + RPA Automation" image = {rp2} imgName = "rp2"
             />
           </div>

           <div className='card'>
             <Card title = "Make Bolder Choices" description = "Digital focused strategies to realize market-changing ideas"
              Link="https://www.xivtech.io/services/enterprise-apps" LinkName = "Build Better Apps" image = {p1} imgName = "p1"
             />
           </div>

       
           <div className='card'>
             <Card title = "Innovate with Speed" description = "Create higher quality software, deliver on customer expectations and business goals"
              Link="https://www.xivtech.io/services/delivery-pipeline-automation" LinkName = "DevOps" image = {p2} imgName = "p2"
             />
           </div>

           <div className='card'>
             <Card title = "Embrace Cloud" description = "With Cloud-First accelerate innovation and optimize performance"
              Link="https://www.xivtech.io/services/cloud" LinkName = "Cloud Services" image = {p3} imgName = "p3"
             />
           </div>

        </div>
        <div className='footer'>
          
        </div>
    </div>
  );
}

export default App;
