import React from 'react'


const Home = () => {
	return (
		<>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
			<Container>
				<Header />
				<Hero videos={api} />
				<Tabs />
			</Container>
		</>
	)
}

export default Home
