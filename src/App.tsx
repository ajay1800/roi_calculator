import { Route, Routes } from 'react-router';
import RoiCalculatorContainer from './views/roiCalculator/roiCalculatorContainer';

function App() {
	return (
		<Routes>
			<Route path='/' element={<RoiCalculatorContainer />} />
		</Routes>
	);
}

export default App;
