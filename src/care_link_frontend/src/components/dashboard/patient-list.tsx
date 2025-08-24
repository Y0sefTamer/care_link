import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const patients = [
  {
    name: "Denzel White",
    type: "Report",
    time: "9:00 AM",
    avatar: "DW",
    bgColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
  },
  {
    name: "Stacy Mitchell",
    type: "Weekly Visit",
    time: "9:15 AM",
    avatar: "SM",
    bgColor: "bg-pink-100 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300"
  },
  {
    name: "Amy Dunham",
    type: "Routine Checkup",
    time: "9:30 AM",
    avatar: "AD",
    bgColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300"
  },
  {
    name: "Demi Joan",
    type: "Report",
    time: "9:50 AM",
    avatar: "DJ",
    bgColor: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300"
  },
  {
    name: "Susan Myers",
    type: "Weekly Visit",
    time: "10:15 AM",
    avatar: "SM",
    bgColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300"
  }
];

export function PatientList() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Patient List</CardTitle>
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          Today
          <ChevronDown className="h-4 w-4 ml-1" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {patients.map((patient, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className={patient.bgColor}>
                  {patient.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">{patient.name}</p>
                <p className="text-sm text-muted-foreground">{patient.type}</p>
              </div>
            </div>
            <Badge variant="outline" className="text-primary border-primary/20">
              {patient.time}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}