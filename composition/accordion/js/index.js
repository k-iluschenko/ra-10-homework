'use strict';

const content = [
	{
		title: 'Компоненты',
		article: 'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.'
	},
	{
		title: 'Выучил раз, используй везде!',
		article:'После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.'
	},
	{
		title: 'Использование JSX',
		article: 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.'
	}
]


class App extends React.Component {

	render (){
		return (
		<main className="main">
      <h2 className="title">React</h2>
      <Section />
      <section className="section">
        <button>toggle</button>
        <h3 className="sectionhead">Выучил раз, используй везде!</h3>
        <div className="articlewrap">
          <div className="article">
            После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.
          </div>
        </div>
      </section>
      <section className="section">
        <button>toggle</button>
        <h3 className="sectionhead">Использование JSX</h3>
        <div className="articlewrap">
          <div className="article">
            JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.
          </div>
        </div>
      </section>
    </main>
    )

	}
}

class Section extends React.Component {

	render() {
		
		
		return (
			<section className="section open">
        <button>toggle</button>
        <h3 className="sectionhead">Компоненты</h3>
        <div className="articlewrap">
          <div className="article">
            Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.
          </div>
        </div>
      </section>	
			)
		
	}


}

