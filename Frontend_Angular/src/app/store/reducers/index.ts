import { MetaReducer } from "@ngrx/store";
import { hydrationMetaReducer } from "./hydration.reducers";

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];

