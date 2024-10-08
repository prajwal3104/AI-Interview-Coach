import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div class="center-content"> 
      <p>Transitioning from building AI/ML applications in Jupyter to deploying full-scale production web apps.</p>
      <div>
        <Button>Lets Start!</Button>
      </div>
    </div>
  );
}
