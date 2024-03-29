'use client'

import { useState, useEffect } from "react";
import Transistor from "@/app/utils/components/Transistor";
import { Node, NodeState } from "@/app/utils/types/types";

interface ANDGateProps {
  transistorWidth: number;
  network: Node[];
}

export default function ANDGate(props: ANDGateProps) {
  const [networkState, setNetworkState] = useState<NodeState[]>()

  const widthHeight = `${props.transistorWidth}px`
  const vLeftShift = `${props.transistorWidth * 0.597 - 5.791}px`
  const outLeftShift = `${props.transistorWidth * 0.597 - 16}px`
  const divHeight = `${props.transistorWidth * props.network.length + 48}px`

  useEffect(() => {
    let tempNetworkState: NodeState[] = [];
    props.network.forEach((node: Node, index) => {
      tempNetworkState.push({
        ...node,
        collectorOn: index === 0 ? true : false,
        baseOn: false
      })
    })

    console.log('tempmNetworkState', tempNetworkState)

    setNetworkState(tempNetworkState)
  }, [props.network])


  const handleInputClick = (id: string) => {

    let nodeClicked = networkState?.find(node => node.id === id)

    let nodeSwitchedOn = networkState?.map(node => {
      if (node.id === id){
        return { ...node, baseOn: !node.baseOn }
      } else if (node.collectsFrom === id && nodeClicked?.collectorOn == true) {
        return {...node, collectorOn: !node.collectorOn}
      }
      return node
    });

    let newerNetworkState:NodeState[] | undefined = [];
    nodeSwitchedOn?.forEach((node, index) => {
      if (node.collectsFrom != "") {
        let collectorNode = newerNetworkState?.find(collector => collector.id === node.collectsFrom)
        if (collectorNode?.baseOn == true && collectorNode?.collectorOn == true) {
          newerNetworkState?.push({ ...node, collectorOn: true }) 
        } else{
          newerNetworkState?.push({ ...node, collectorOn: false })
        }
        
      } else {
        newerNetworkState?.push(node)
      }
    })


    setNetworkState(newerNetworkState)
  };

  return (
    <div 
      className="relative flex mt-4"
      style = {{height: divHeight}}
    >
      <div className="relative h-full">
        {
          networkState?.map((node, index) => {
            const guid = crypto.randomUUID()
            return (
              <div className={`flex ${index == 0 ? 'items-end' : 'items-start'}`} key={guid}>
                <div className="flex items-center relative"
                  style={{height: widthHeight}}>
                  <button 
                    className={`absolute right-2 p-1  rounded-md text-black whitespace-nowrap ${node.baseOn ? 'bg-green-500' : 'bg-gray-400'}`}
                    onClick = {() => handleInputClick(node.id)}
                  >
                    {node.baseOn == true ? 'Turn Off' : 'Turn On'}
                  </button>
                </div>
                <div>
                  {
                    index === 0 && (
                      <div 
                        className="w-fit relative text-red-500  font-semibold"
                        style={{left: vLeftShift}}
                      >
                        V
                      </div>
                    )
                  }
                  <div 
                    className=""
                    style={{width: widthHeight, height: widthHeight}}
                  >
                    <Transistor collectorIn={node.collectorOn} baseIn={node.baseOn}/>
                  </div>
                  {
                    index === networkState.length-1 && (
                      <div 
                        className={`w-fit relative   font-semibold ${node.collectorOn == true && node.baseOn == true ? 'text-red-500' : 'text-black'}`}
                        style={{left: outLeftShift}}
                      >
                        Out
                      </div>
                    )
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}