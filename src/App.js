import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import { GridView, LocalDataProvider } from 'realgrid';
import './App.css';
import { columns, fields } from './realgrid-data';



function App() {

  let provider = useRef(null);
  let gridView = useRef(null);
  const [check,setCheck]= useState(false); //저장 눌렀다면 리랜더링 되게끔 체크하기 위한 목적

  useEffect(()=>{
    (gridView.current === null) && (provider.current = new LocalDataProvider());
    (gridView.current === null) && (gridView.current = new GridView("realgrid"));
    gridView.current.setDataSource(provider.current);
    provider.current.setFields(fields); 
    gridView.current.setColumns(columns);
    
    gridView.current.setEditOptions({
      insertable: true,
      appendable: true
    }); 
    gridView.current.beginAppendRow();
    gridView.current.showEditor();
    gridView.current.setFocus();
    gridView.current.setEditOptions({
      insertable: true,
      appendable: true,
      updatable: true,
      deletable: true, //CRUD 하기 위한 작업들
      softDeleting: true,
    });
    setCheck(false);
    console.log("여기 들옴")
    gridView.current.commit();
    gridView.current.cancel();
    axios.get('/api/hansun')
    .then(res => {
      gridView.current.commit();
      gridView.current.cancel();
      provider.current.setRows(res.data);
    });
  },[check])
  

  //행추가하기
  function add (){
    gridView.current.beginAppendRow();
    gridView.current.showEditor();
    gridView.current.setFocus();
  }


  //추가하기
  function save(){
    gridView.current.commit();
    let rowStates = {
      "created": provider.current.getStateRows("created")
    }
    const value = gridView.current.getValues(rowStates.created);
    gridView.current.cancel();
    axios.post('/api/hansun',{
      data: value
    })
    setCheck(true);
    
  }   


  //수정하기
  function update(){
    let rowStates = {
      "updated": provider.current.getStateRows("updated")
    }
    const value = gridView.current.getValues(rowStates.updated);
    console.log(value);
    axios.put('/api/hansun',{
      data: value
    })
    setCheck(true);
  }


  //삭제하기
  function remove(){
    provider.current.setOptions({
      softDeleting:true //데이터를 바로 삭제하지 않고 상태만 변경
    })
    gridView.current.deleteSelection();


    let rowStates = {
      "deleted": provider.current.getStateRows("deleted")
    }
    const value = gridView.current.getValues(rowStates.deleted);
    console.log(value);
    axios.delete('/api/hansun',{
      data: value
    })
    setCheck(true);
  }




  return (
    <div>
            <div id="realgrid"></div>
            <button onClick={add}> 행추가</button>
            <button onClick={save}>값 저장</button>
            <button onClick={remove}>삭제</button>
            <button onClick={update}>수정</button>
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
}


export default App;

// function rowid(){
//   let focusCell = gridView.current.getCurrent();
//   //let state = gridView.current.getAllStateRow(table[0])
//   alert(focusCell.dataRow);
//   //alert(state);
// }