import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    title: "New appointment scheduled with Sarah Johnson",
    time: "2 hours ago"
  },
  {
    title: "Nurse Maria Garcia checked in with patient #142",
    time: "3 hours ago"
  },
  {
    title: "New patient request from Michael Chen",
    time: "5 hours ago"
  },
  {
    title: "Appointment completed with Emma Wilson",
    time: "6 hours ago"
  }
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex flex-col space-y-1 pb-3 border-b border-border last:border-b-0">
            <p className="text-sm font-medium text-foreground">
              {activity.title}
            </p>
            <p className="text-xs text-muted-foreground">
              {activity.time}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}