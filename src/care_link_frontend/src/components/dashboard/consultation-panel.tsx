import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Thermometer, Heart, Activity } from "lucide-react";

const symptoms = [
  { icon: Thermometer, label: "Fever", active: true },
  { icon: Activity, label: "Cough", active: true },
  { icon: Heart, label: "Heart Burn", active: false }
];

export function ConsultationPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Consultation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Patient Info */}
        <div className="flex items-center space-x-3">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
              DW
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-foreground">Denzel White</h3>
            <p className="text-sm text-muted-foreground">Male • 28 Years • 3 Months</p>
          </div>
        </div>

        {/* Symptoms */}
        <div>
          <h4 className="font-medium text-foreground mb-3">Symptoms</h4>
          <div className="flex space-x-2">
            {symptoms.map((symptom, index) => (
              <div 
                key={index}
                className={`flex flex-col items-center p-3 rounded-lg border ${
                  symptom.active 
                    ? 'bg-primary/10 border-primary text-primary' 
                    : 'bg-muted border-border text-muted-foreground'
                }`}
              >
                <symptom.icon className="h-6 w-6 mb-1" />
                <span className="text-xs font-medium">{symptom.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Last Checked */}
        <div>
          <h4 className="font-medium text-foreground mb-2">Last Checked</h4>
          <p className="text-sm text-muted-foreground">
            Dr Evelyn on 31 April 2021 Prescription:
          </p>
          <Badge variant="secondary" className="mt-1">
            #223845710
          </Badge>
        </div>

        {/* Observation */}
        <div>
          <h4 className="font-medium text-foreground mb-2">Observation</h4>
          <p className="text-sm text-muted-foreground">
            High fever and cough at normal hemorrhaging levels.
          </p>
        </div>

        {/* Prescription */}
        <div>
          <h4 className="font-medium text-foreground mb-2">Prescription</h4>
          <p className="text-sm text-muted-foreground">
            Paracetamol - 2 times a day
          </p>
          <p className="text-sm text-muted-foreground">
            Dextrom - Day and Night before meal
          </p>
          <p className="text-sm text-muted-foreground">
            Wikoryl
          </p>
        </div>
      </CardContent>
    </Card>
  );
}