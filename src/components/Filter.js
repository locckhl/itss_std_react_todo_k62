/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({ onChange, status }) {
  return (
    <div className="panel-tabs">
      <div className={status === 'ALL' ? 'button is-primary is-active' : 'button is-primary'} onClick={()=>{
        onChange("ALL")
      }}>
        全て
      </div>
      <div className={status === 'TODO' ? 'button is-primary is-active' : 'button is-primary'}  onClick={()=>{
        onChange("TODO")
      }}>
        未完了
      </div>
      <div className={status === 'DONE' ? 'button is-primary is-active' : 'button is-primary'}  onClick={()=>{
        onChange("DONE")
      }}>
        完了済み
      </div>
    </div>
  );
}

export default Filter;
