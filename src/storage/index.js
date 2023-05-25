import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState , useGlobalState} = createGlobalState({
    storeFileHash : '',
    storeFileContent:'',
    contentArray : []
});

export { useGlobalState, setGlobalState};   