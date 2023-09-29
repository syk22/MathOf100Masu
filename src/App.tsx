import './App.css';
import PartsOfNumber from './components/PartsOfNumber';
import PartsOfInput from './components/PartsOfInput';

const App = () => {
  // X列Header
  const numberXarray: number[] = [2, 8, 5, 1, 7, 3, 6, 9, 0, 4];
  // Y列Header
  const numberYarray: number[] = [4, 5, 1, 8, 3, 9, 0, 2, 7, 6];

  // 最初の行
  const headerX = (): JSX.Element[] => {
    return numberXarray.map((v, i) => {
      return (
        <th className="td-header" key={i.toString()}>
          <PartsOfNumber displayNum={v.toString()} />
        </th>
      );
    });
  };

  let counter = 0;
  const headerY = (): JSX.Element[] => {
    return numberYarray.map((v, i) => {
      return (
        <tr key={`${v}+${i.toString()}`}>
          <td className="td-header">
            <PartsOfNumber displayNum={v.toString()} />
          </td>
          {Array(10)
            .fill(0)
            .map((_, i2) => {
              return (
                <td className="td-header" key={i2.toString()}>
                  <PartsOfInput
                    ans={(numberXarray[i] * numberYarray[i2]).toString()}
                    keyId={(counter++).toString()}
                  />
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
          <thead>
            <tr>
              <th className="td-header"> </th>
              {headerX()}
            </tr>
          </thead>
          <tbody>{headerY()}</tbody>
        </table>
      </div>
    </>
  );
};

export default App;
