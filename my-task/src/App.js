import React, { useState } from 'react';
import Leaderboard from './components/Leaderboard';
import { tableData, tableHeader } from './components/tableData';


function App() {
  const [data, setData] = useState(tableData);

  return (
    <div className="App">
      <Leaderboard columns={data} header={tableHeader}/>
    </div>
  );
}

export default App;
