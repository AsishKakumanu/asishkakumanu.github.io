import React from "react"
import Lottie from "react-lottie"
import animationData from "../images/hand.json"

export default class noHandShake extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    }

    return (
      <div className="lottie">
        <Lottie options={defaultOptions} height={60} width={60} />
      </div>
    )
  }
}
