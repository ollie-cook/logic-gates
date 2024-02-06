'use client'

import { useState } from "react"
import ANDGate from "./components/ANDGate";
import Network from "@/app/utils/constants/Network";



export default function Home() {
  const [network, setNetwork] = useState(Network)

  const editTransistorCount = (mode: string) => {
    let tempNetwork = [...network]

    if (mode == "add") {
      const guid = crypto.randomUUID()
      const collectsFrom = tempNetwork[tempNetwork.length - 1].id
  
      tempNetwork.push({
        id: guid,
        type: "transistor",
        collectsFrom: collectsFrom,
        baseConnectsTo: "switch"
      })
    } else if (mode == "remove") {
      tempNetwork.pop()
    }
    

    setNetwork(tempNetwork)
  }

  return (
    <main className="flex flex-col items-center mb-16 sm:mb-0">
      <button onClick ={() => editTransistorCount('add')} className="text-xl p-2 mt-16 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-600">Add Input</button>
      {
        network.length > 1 &&
        <button onClick ={() => editTransistorCount('remove')} className=" p-1 mt-2 bg-red-500 rounded-md text-white hover:bg-red-600">Remove Input</button>
      }
      <ANDGate transistorWidth={128} network={network} />
    </main>
  );
}
