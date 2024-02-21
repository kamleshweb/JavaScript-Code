import {Suspense} from 'react';

const myLazyComponent = React.lazy(() => import('./MyLazyComponent'));

function App(){
    return(
        <>
        <Suspense fallback = {<div>Loading</div>}>
            <myLazyComponent />
            </Suspense>
        </>
    )
}