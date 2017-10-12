import React from "react";
import anime from "animejs";

class AnimatedLogo extends React.Component {
  componentDidMount() {
    anime({
      targets: "#lineDrawing .lines path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 3000,
      delay: function(el, i) {
        return i * 550;
      },
      direction: "alternate",
      loop: false,
      complete: anim => {
        document.querySelector("path").setAttribute("fill", "currentColor");
      }
    });
  }
  render() {
    const { width, height } = this.props;
    return (
      <div id="lineDrawing">
        <svg width={width} height={height} viewBox="0 0 785 671">
          <g
            fill="none"
            fillRule="evenodd"
            stroke="currentColor"
            strokeWidth="20"
            className="lines"
          >
            <path
              id="logo-path"
              d="M 192.084 0L 2.41746 0C -0.650241 3.66156 -0.162384 6.57161 2.41746 12.4259L 230.95 337.053L 2.41746 657.021C -1.18107 664.722 -0.407442 667.301 2.41746 671L 195.193 671L 394.188 392.97L 394.188 664.787C 396.267 669.164 397.641 670.442 400.407 671L 689.571 671L 781.295 537.421C 786.437 527.694 786.029 524.196 781.295 520.336L 576.081 520.336L 576.081 0L 394.188 0L 394.188 279.583L 192.084 0Z"
              strokeDasharray="47.128875732421875"
              style={{ strokeDashoffset: 47.1289 }}
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default AnimatedLogo;
