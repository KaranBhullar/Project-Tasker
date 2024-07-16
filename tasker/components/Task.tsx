import { Text } from "react-native-reanimated/lib/typescript/Animated";
import { Urgency } from "@/constants/Urgency";
type taskProps = {
    taskName: string,
    category : string | boolean,
    urgency? : number,
    deadline? : Date
}
// finish later

function Task(props : taskProps) {
    <Text>Testing one two three</Text>
};

export default Task;