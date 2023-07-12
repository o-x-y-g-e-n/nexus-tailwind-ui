import React, { useCallback } from "react"
import ReactDOMServer from "react-dom/server"
import CodeFormatter from "./CodeFormatter"
const CodeComponentLayout = ({ childComponent, title }) => {
  const [state, setState] = React.useState("A")
  const [showCheckmark, setShowCheckmark] = React.useState(false)

  let card1ComponentString = ReactDOMServer.renderToString(childComponent)
  const addNewLineToGreater = inputString => {
    return inputString.replace(/>/g, ">\n")
  }
  card1ComponentString = addNewLineToGreater(card1ComponentString)
  const onToggle = useCallback(
    value => {
      setState(value)
    },
    [state]
  )

  const copyTextToCC = () => {
    navigator.clipboard
      .writeText(card1ComponentString)
      .then(() => {
        setShowCheckmark(true)
        setTimeout(() => {
          setShowCheckmark(false)
        }, 2000)
      })
      .catch(error => console.error("Failed to copy code:", error))
  }
  let NonselectedStyles = `inline-block cursor-pointer rounded-t-lg px-4 py-4 text-center text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-600"`
  let SelectedStyles =
    "active cursor-pointer  inline-block rounded-t-lg bg-gray-100 px-4 py-4 text-center text-sm font-medium text-blue-600"
  return (
    <div className="p-4">
      <h1 className="text-gray-800 text-3xl mt-4 font-semibold mb-4">{title}</h1>
      <section className="shadow-md pb-4" style={{ width: "95%" }}>
        <ul className="flex flex-wrap border-b border-gray-200">
          <li className="mr-2">
            <a
              onClick={() => onToggle("A")}
              aria-current="page"
              className={state == "A" ? SelectedStyles : NonselectedStyles}
            >
              Preview
            </a>
          </li>
          <li className="mr-2">
            <a
              onClick={() => onToggle("B")}
              className={state == "B" ? SelectedStyles : NonselectedStyles}
            >
              Code
            </a>
          </li>
          <li className="ml-auto pr-8">
            <a
              onClick={copyTextToCC}
              className="inline-block cursor-pointer rounded-t-lg py-4  text-center text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-600"
            >
              {showCheckmark && (
                <span
                  className="mr-2"
                  style={{ transition: "opacity 0.2s ease-out" }}
                >
                  ✅
                </span>
              )}
              Copy to clipboard
              <span className="ml-2">✨</span>
            </a>
          </li>
        </ul>
        {state == "A" ? (
          <div className="p-4">
            {/* <Card1 /> */}
            {childComponent}
          </div>
        ) : (
          <div>
            <CodeFormatter code={card1ComponentString} />
          </div>
        )}
      </section>
    </div>
  )
}

export default CodeComponentLayout
