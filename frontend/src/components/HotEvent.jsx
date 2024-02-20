import { useHotStore } from '../store/store';
import Event from './Event';

export default function HotEvent() {
  const hotEvent = useHotStore((state) => state.hotEvent);
  console.log(hotEvent);
  return <div>hi</div>;
}
