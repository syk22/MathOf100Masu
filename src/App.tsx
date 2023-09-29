// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import './App.css';
import PartsOfInput from './components/PartsOfNumber';

// interface Props {
//   type: "x" | "y";
//   index: number;
// }

const App = () => {
  // X列Header
  const numberXarray: number[] = [2, 8, 5, 1, 7, 3, 6, 9, 0, 4];
  // Y列Header
  const numberYarray: number[] = [4, 5, 1, 8, 3, 9, 0, 2, 7, 6];

  // 最初の行
  const headerX = (): JSX.Element[] => {
    return numberXarray.map((v, i) => {
      return (
        <td className="td-header">
          <PartsOfInput displayNum={v.toString()} key={i.toString()} />
        </td>
      );
    });
  };

  let counter = 0;
  const headerY = (): JSX.Element[] => {
    return numberYarray.map((v, i) => {
      return (
        <tr>
          <td className="td-header">
            <PartsOfInput displayNum={v.toString()} key={i.toString()} />
          </td>
          {Array(10)
            .fill(0)
            .map((_, i2) => {
              return (
                <td className="td-header" key={i2.toString()}>
                  {counter++}
                </td>
              );
            })}
        </tr>
      );
    });
  };

  return (
    <>
      <div className="mainContents">
        <table>
          <tr>
            <td> </td>
            {headerX()}
          </tr>
          {headerY()}
        </table>
      </div>
    </>
  );
};

export default App;
