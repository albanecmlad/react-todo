
const TodoApp = React.createClass({
  getInitialState: ()=> {
    return {

    }
  },
  render: ()=> {
    return (
      <div>
        <header>
          <h1>TODOS</h1>
          <input
            placeholder="Что ещё осталось сделать?"
            autoFocus={true}
          />
        </header>
      </div>
    )
  }
});
