import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface LogoutDialogProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export function LogoutDialog({ open, onClose, onConfirm }: LogoutDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md rounded-2xl shadow-gradient border border-border">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <DialogHeader>
                        <DialogTitle className="text-gradient-primary text-xl font-bold">
                            Logout Confirmation
                        </DialogTitle>
                        <DialogDescription className="text-muted-foreground">
                            Are you sure you want to log out of CareLink? You will need to
                            log in again to access your account.
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="flex flex-col sm:flex-row gap-3 mt-6">
                        <Button
                            variant="outline"
                            className="border-primary text-primary  w-full sm:w-auto"
                            onClick={onClose}
                        >
                            Cancel
                        </Button>
                        <Button
                            className="bg-gradient-primary text-white shadow-gradient w-full sm:w-auto"
                            onClick={() => {
                                onConfirm();
                                onClose();
                            }}
                        >
                            Logout
                        </Button>

                    </DialogFooter>
                </motion.div>
            </DialogContent>
        </Dialog>
    );
}
