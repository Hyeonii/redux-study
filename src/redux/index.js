// actions를 한 곳으로 몰아서 compoment에서 import 할 때 경로를 줄여준다.
// 기존: redux/gogumas/actions ==> /redux
export { buyGoguma, refundGoguma } from "./gogumas/actions";
export { addLikes, cancelLikes } from "./likes/actions";
export { fetchComments } from "./comments/actions";
