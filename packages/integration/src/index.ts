import { Doctor } from "@monorepo-example/doctor";
import { Patient } from "@monorepo-example/patient";
import { Scheduler } from "@monorepo-example/scheduler";

console.log(new Doctor());
console.log(new Doctor().test());
console.log(new Scheduler());
console.log(new Patient());