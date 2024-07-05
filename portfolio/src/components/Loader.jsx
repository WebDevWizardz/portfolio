import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

function Loader({ onComplete }) {
  // Add onComplete prop
  const logoRef = useRef(null)
  const logoBg = useRef(null)

  useEffect(() => {
    const logo = logoRef.current
    const bg = logoBg.current
    if (logo) {
      setTimeout(() => {
        logo.classList.add("exit")
      }, 2000)
      setTimeout(() => {
        gsap.to(bg, {
          y: "-100%",
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            onComplete() // Notify that the animation is complete
          },
        })
      }, 2500) // Delay to allow initial animations to complete before moving loader
    }
  }, [onComplete])

  return (
    <div
      ref={logoBg}
      className="logoBg w-full h-screen flex gap-3 justify-center items-center bg-[#0f0f10]"
    >
      <div className="logo_container overflow-hidden relative">
        <svg
          ref={logoRef}
          className="logo"
          width="360"
          height="50"
          viewBox="0 0 360 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECECEE">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.04s"
                  begin="1s"
                  fill="freeze"
                />
              </stop>
              <stop offset="0%" stopColor="#67696D">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.04s"
                  begin="1s"
                  fill="freeze"
                />
              </stop>
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECECEE">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.04s"
                  begin="1.04s"
                  fill="freeze"
                />
              </stop>
              <stop offset="0%" stopColor="#67696D">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.04s"
                  begin="1.04s"
                  fill="freeze"
                />
              </stop>
            </linearGradient>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECECEE">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.04s"
                  begin="1.08s"
                  fill="freeze"
                />
              </stop>
              <stop offset="0%" stopColor="#67696D">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.04s"
                  begin="1.08s"
                  fill="freeze"
                />
              </stop>
            </linearGradient>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECECEE">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.04s"
                  begin="1.12s"
                  fill="freeze"
                />
              </stop>
              <stop offset="0%" stopColor="#67696D">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.04s"
                  begin="1.12s"
                  fill="freeze"
                />
              </stop>
            </linearGradient>
            <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECECEE">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.03s"
                  begin="1.15s"
                  fill="freeze"
                />
              </stop>
              <stop offset="0%" stopColor="#67696D">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.03s"
                  begin="1.15s"
                  fill="freeze"
                />
              </stop>
            </linearGradient>
            <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECECEE">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.03s"
                  begin="1.18s"
                  fill="freeze"
                />
              </stop>
              <stop offset="0%" stopColor="#67696D">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.03s"
                  begin="1.18s"
                  fill="freeze"
                />
              </stop>
            </linearGradient>
            <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECECEE">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.04s"
                  begin="1.22s"
                  fill="freeze"
                />
              </stop>
              <stop offset="0%" stopColor="#67696D">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.04s"
                  begin="1.22s"
                  fill="freeze"
                />
              </stop>
            </linearGradient>
            <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECECEE">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.04s"
                  begin="1.26s"
                  fill="freeze"
                />
              </stop>
              <stop offset="0%" stopColor="#67696D">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.04s"
                  begin="1.26s"
                  fill="freeze"
                />
              </stop>
            </linearGradient>
            <linearGradient id="grad9" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECECEE">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.05s"
                  begin="1.75s"
                  fill="freeze"
                />
              </stop>
              <stop offset="0%" stopColor="#67696D">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.05s"
                  begin="1.75s"
                  fill="freeze"
                />
              </stop>
            </linearGradient>
            <linearGradient id="grad10" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECECEE">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.05s"
                  begin="1.8s"
                  fill="freeze"
                />
              </stop>
              <stop offset="0%" stopColor="#67696D">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.05s"
                  begin="1.8s"
                  fill="freeze"
                />
              </stop>
            </linearGradient>
            <linearGradient id="grad11" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECECEE">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.05s"
                  begin="1.85s"
                  fill="freeze"
                />
              </stop>
              <stop offset="0%" stopColor="#67696D">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.05s"
                  begin="1.85s"
                  fill="freeze"
                />
              </stop>
            </linearGradient>
            <linearGradient id="grad12" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ECECEE">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.05s"
                  begin="1.9s"
                  fill="freeze"
                />
              </stop>
              <stop offset="0%" stopColor="#67696D">
                <animate
                  attributeName="offset"
                  values="0;1"
                  dur="0.05s"
                  begin="1.9s"
                  fill="freeze"
                />
              </stop>
            </linearGradient>
          </defs>
          <g>
            <path
              d="M325.519 32.2452L329.096 29.2645C331.643 33.4916 335.978 35.3884 341.452 35.3884C346.383 35.3884 350.177 33.9794 350.177 30.7819C350.177 27.422 346.817 27.3136 339.88 26.5549C332.835 25.742 327.253 24.6039 327.253 18.8052C327.253 13.6026 332.51 10.0259 340.097 10.0259C346.925 10.0259 352.019 12.7355 354.295 16.3665L350.99 19.2388C348.876 15.8788 344.92 14.0904 339.934 14.0904C334.894 14.0904 331.968 15.7704 331.968 18.3717C331.968 21.1897 334.84 21.5149 340.91 22.2194C348.497 23.0865 355 23.7368 355 30.4026C355 36.3639 348.551 39.5071 341.506 39.5071C334.352 39.5071 328.283 37.0142 325.519 32.2452Z"
              fill="url(#grad12)"
            />
            <path
              d="M296.145 32.2452L299.721 29.2645C302.268 33.4916 306.604 35.3884 312.077 35.3884C317.009 35.3884 320.803 33.9794 320.803 30.7819C320.803 27.422 317.443 27.3136 310.506 26.5549C303.461 25.742 297.879 24.6039 297.879 18.8052C297.879 13.6026 303.135 10.0259 310.723 10.0259C317.551 10.0259 322.645 12.7355 324.921 16.3665L321.615 19.2388C319.502 15.8788 315.546 14.0904 310.56 14.0904C305.52 14.0904 302.594 15.7704 302.594 18.3717C302.594 21.1897 305.466 21.5149 311.535 22.2194C319.123 23.0865 325.626 23.7368 325.626 30.4026C325.626 36.3639 319.177 39.5071 312.132 39.5071C304.978 39.5071 298.908 37.0142 296.145 32.2452Z"
              fill="url(#grad11)"
            />
            <path
              d="M281.26 35.28C286.734 35.28 290.635 32.4619 291.936 28.5058L295.892 30.5652C294.212 35.3342 288.901 39.5071 281.26 39.5071C271.885 39.5071 265.165 33.4374 265.165 24.7665C265.165 16.3665 271.722 10.0259 281.26 10.0259C290.527 10.0259 296.326 16.2039 296.326 24.1162V26.0129H269.771C270.367 31.649 275.028 35.28 281.26 35.28ZM281.043 14.1446C275.57 14.1446 271.072 17.1794 269.988 22.2736H291.557C291.232 18.4259 287.384 14.1446 281.043 14.1446Z"
              fill="url(#grad10)"
            />
            <path
              d="M256.607 0H261.755V38.9109H256.607V21.0812H227.234V38.9109H222.031V0H227.234V16.529H256.607V0Z"
              fill="url(#grad9)"
            />
            <path
              d="M187.148 39.5071C180.807 39.5071 175.767 36.5806 175.767 30.9987C175.767 25.742 180.319 23.0323 186.985 22.2736L199.504 20.8646V20.16C199.504 16.5833 196.577 14.1988 191.05 14.1988C186.226 14.1988 182.108 16.4749 180.915 19.7265L176.851 17.8839C178.639 13.1149 184.546 10.0259 191.158 10.0259C199.341 10.0259 204.219 13.6568 204.219 20.2142V33.0039C204.219 35.1174 205.628 35.7135 208.771 35.009V38.911C203.352 39.9406 200.425 37.9355 199.937 34.6297L199.883 34.3587C197.336 37.6103 192.513 39.5071 187.148 39.5071ZM199.504 27.5845V24.7665L187.69 26.1213C183.463 26.6091 180.536 27.6929 180.536 30.9445C180.536 33.871 183.3 35.4968 187.527 35.4968C193.109 35.4968 199.504 32.8955 199.504 27.5845Z"
              fill="url(#grad8)"
            />
            <path
              d="M144.906 38.911V10.5678H149.783V15.5536C151.789 12.573 155.636 10.0259 160.947 10.0259C168.859 10.0259 173.195 15.4452 173.195 23.1407V38.911H168.263V23.8994C168.263 18.5342 165.499 14.5239 159.592 14.5239C153.902 14.5239 149.783 18.4259 149.783 24.4413V38.911H144.906Z"
              fill="url(#grad7)"
            />
            <path
              d="M134.95 5.63611V0H140.261V5.63611H134.95ZM140.044 10.5677V38.9109H135.167V10.5677H140.044Z"
              fill="url(#grad6)"
            />
            <path
              d="M130.303 0V38.9109H125.426V0H130.303Z"
              fill="url(#grad5)"
            />
            <path
              d="M106.542 10.0259C115.538 10.0259 122.421 16.0413 122.421 24.7665C122.421 33.4374 115.538 39.5071 106.542 39.5071C97.4375 39.5071 90.6091 33.4374 90.6091 24.7665C90.6091 16.0413 97.4375 10.0259 106.542 10.0259ZM106.542 35.28C112.828 35.28 117.706 31.1613 117.706 24.7665C117.706 18.3175 112.828 14.253 106.542 14.253C100.147 14.253 95.2698 18.3175 95.2698 24.7665C95.2698 31.1613 100.147 35.28 106.542 35.28Z"
              fill="url(#grad4)"
            />
            <path
              d="M91.6266 10.7304V15.6078C90.4344 15.3369 89.6757 15.1743 88.3208 15.1743C81.8176 15.1743 77.4821 18.9678 77.4821 25.5794V38.911H72.6047V10.5678H77.4821V16.5291C79.5957 12.7898 83.1725 10.3511 88.4292 10.3511C89.7299 10.3511 90.8679 10.5137 91.6266 10.7304Z"
              fill="url(#grad3)"
            />
            <path
              d="M49.4822 39.5071C43.1415 39.5071 38.1016 36.5806 38.1016 30.9987C38.1016 25.742 42.6538 23.0323 49.3196 22.2736L61.8383 20.8646V20.16C61.8383 16.5833 58.9118 14.1988 53.3841 14.1988C48.5609 14.1988 44.4422 16.4749 43.2499 19.7265L39.1854 17.8839C40.9738 13.1149 46.8809 10.0259 53.4925 10.0259C61.6757 10.0259 66.5531 13.6568 66.5531 20.2142V33.0039C66.5531 35.1174 67.9621 35.7135 71.1053 35.009V38.911C65.686 39.9406 62.7596 37.9355 62.2718 34.6297L62.2176 34.3587C59.6705 37.6103 54.8473 39.5071 49.4822 39.5071ZM61.8383 27.5845V24.7665L50.0241 26.1213C45.797 26.6091 42.8706 27.6929 42.8706 30.9445C42.8706 33.871 45.6344 35.4968 49.8615 35.4968C55.4434 35.4968 61.8383 32.8955 61.8383 27.5845Z"
              fill="url(#grad2)"
            />
            <path
              d="M5.20257 0V20.8645L31.1612 0H38.6399L17.3419 16.7458L40.1573 38.9109H33.1122L13.4942 19.7806L5.20257 26.2838V38.9109H0V0H5.20257Z"
              fill="url(#grad1)"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Loader
