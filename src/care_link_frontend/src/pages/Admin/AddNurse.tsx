import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NurseData {
    firstName: string;
    lastName: string;
    gender: string;
    designation: string;
    email: string;
    dob: string;
    country: string;
    city: string;
    street: string;
    phone: string;
    emergencyName: string;
    emergencyNumber: string;
    emergencyRelation: string;
    workExperience: string;
    certification: File | null;
    preferredArea: string;
    hourlyRate: string;
    availableShift: string;
    services: string[];
}

const mockServices = ["Pediatrics", "ICU", "Geriatrics", "Surgery", "Maternity"];

export default function AddNurse() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<NurseData>({
        firstName: "",
        lastName: "",
        gender: "",
        designation: "",
        email: "",
        dob: "",
        country: "",
        city: "",
        street: "",
        phone: "",
        emergencyName: "",
        emergencyNumber: "",
        emergencyRelation: "",
        workExperience: "",
        certification: null,
        preferredArea: "",
        hourlyRate: "",
        availableShift: "",
        services: [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === "file") {
            setFormData((prev) => ({
                ...prev,
                [name]: (e.target as HTMLInputElement).files?.[0] || null,
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleCheckbox = (service: string) => {
        setFormData((prev) => {
            if (prev.services.includes(service)) {
                return { ...prev, services: prev.services.filter((s) => s !== service) };
            } else {
                return { ...prev, services: [...prev.services, service] };
            }
        });
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
    };

    return (
        <div className="p-12 m-12  mx-auto space-y-8">
            {/* Steps */}
            <div className="flex flex-wrap justify-evenly md:space-x-12 gap-10">
                {["1 Basic Information", "2 Enter Details", "3 Select Services", "4 Review & Submit"].map(
                    (title, index) => {
                        const [num, ...rest] = title.split(" ");
                        return (
                            <div
                                key={title}
                                className={`pb-2 cursor-pointer relative flex items-center space-x-2 transition-colors duration-300 ${step === index + 1
                                    ? "text-gradient-primary font-semibold"
                                    : "text-muted-foreground"
                                    }`}
                                onClick={() => setStep(index + 1)}
                            >
                                <span
                                    className={`inline-block transform scale-y-150 text-lg md:text-xl font-bold ${step === index + 1 ? "text-gradient-primary" : "text-muted-foreground"
                                        }`}
                                >
                                    {num}
                                </span>
                                <span className="text-sm md:text-base">{rest.join(" ")}</span>
                                {step === index + 1 && (
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-primary rounded-full"></span>
                                )}
                            </div>
                        );
                    }
                )}
            </div>

            {/* Forms */}
            <AnimatePresence mode="sync">
                {step === 1 && (
                    <motion.div

                        key="step1"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-[#0097E821] p-6 md:p-8 rounded-2xl shadow-card space-y-6 transition"
                    >
                        <h2 className="text-xl font-semibold">Basic Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:space-y-8">
                            <input
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary"
                            />
                            <input
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary"
                            />
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary "
                            >
                                <option className="dark:text-black" value="">Select Gender</option>
                                <option className="dark:text-black" value="Male">Male</option>
                                <option className="dark:text-black" value="Female">Female</option>
                            </select>
                            <input
                                name="designation"
                                placeholder="Designation"
                                value={formData.designation}
                                onChange={handleChange}
                                className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary"
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary"
                            />
                            <input
                                name="dob"
                                type="date"
                                value={formData.dob}
                                onChange={handleChange}
                                className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary"
                            />
                        </div>
                        <div className="flex justify-end md:pt-48">
                            <button
                                onClick={() => setStep(2)}
                                className="px-6 py-2 bg-gradient-primary text-white rounded-lg shadow-sm transition hover:shadow-md"
                            >
                                Next Step
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-[#0097E821] p-6 md:p-8 rounded-2xl shadow-card space-y-6 transition"
                    >
                        <h2 className="text-xl font-semibold">Enter Details</h2>

                        {/* Address */}
                        <div className="space-y-2">
                            <h3 className="font-medium">Address Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:space-y-8">
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary "
                                >
                                    <option className="dark:text-black" value="">Select Country</option>
                                    <option className="dark:text-black" value="Egypt">Egypt</option>
                                    <option className="dark:text-black" value="USA">USA</option>
                                </select>
                                <input
                                    name="city"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary"
                                />
                                <input
                                    name="street"
                                    placeholder="Street Address"
                                    value={formData.street}
                                    onChange={handleChange}
                                    className="border-b border-input p-2 md:col-span-2 bg-transparent focus:outline-none focus:border-primary"
                                />
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="space-y-2">
                            <h3 className="font-medium">Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary"
                                />
                                <input
                                    name="emergencyName"
                                    placeholder="Emergency Contact Name"
                                    value={formData.emergencyName}
                                    onChange={handleChange}
                                    className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary"
                                />
                                <input
                                    name="emergencyNumber"
                                    placeholder="Emergency Contact Number"
                                    value={formData.emergencyNumber}
                                    onChange={handleChange}
                                    className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary"
                                />
                                <input
                                    name="emergencyRelation"
                                    placeholder="Relation to Contact"
                                    value={formData.emergencyRelation}
                                    onChange={handleChange}
                                    className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary"
                                />
                            </div>
                        </div>

                        {/* Work Details */}
                        <div className="space-y-2">
                            <h3 className="font-medium">Work Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    name="workExperience"
                                    placeholder="Work Experience"
                                    value={formData.workExperience}
                                    onChange={handleChange}
                                    className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary"
                                />
                                <input
                                    type="file"
                                    name="certification"
                                    onChange={handleChange}
                                    className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary"
                                />
                                <select
                                    name="preferredArea"
                                    value={formData.preferredArea}
                                    onChange={handleChange}
                                    className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary"
                                >
                                    <option className="dark:text-black" value="">Preferred Work Area</option>
                                    <option className="dark:text-black" value="ICU">ICU</option>
                                    <option className="dark:text-black" value="Ward">Ward</option>
                                </select>
                                <input
                                    name="hourlyRate"
                                    placeholder="Hourly Rate"
                                    value={formData.hourlyRate}
                                    onChange={handleChange}
                                    className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary"
                                />
                                <select
                                    name="availableShift"
                                    value={formData.availableShift}
                                    onChange={handleChange}
                                    className="border-b border-input p-2 bg-transparent focus:outline-none focus:border-primary"
                                >
                                    <option className="dark:text-black" value="">Available Shift</option>
                                    <option className="dark:text-black" value="Morning">Morning</option>
                                    <option className="dark:text-black" value="Evening">Evening</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-between md:pt-16">
                            <button
                                onClick={() => setStep(1)}
                                className="px-6 py-2 bg-muted text-muted-foreground rounded-lg transition hover:shadow-sm"
                            >
                                Back
                            </button>
                            <button
                                onClick={() => setStep(3)}
                                className="px-6 py-2 bg-gradient-primary text-white rounded-lg shadow-sm transition hover:shadow-md"
                            >
                                Next Step
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-[#0097E821] p-6 md:p-8 rounded-2xl shadow-card space-y-6 transition"
                    >
                        <h2 className="text-xl font-semibold">Select Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                            {mockServices.map((s) => (
                                <label key={s} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={formData.services.includes(s)}
                                        onChange={() => handleCheckbox(s)}
                                    />
                                    {s}
                                </label>
                            ))}
                        </div>
                        <div className="flex justify-between md:pt-48">
                            <button
                                onClick={() => setStep(2)}
                                className="px-6 py-2 bg-muted text-muted-foreground rounded-lg transition hover:shadow-sm"
                            >
                                Back
                            </button>
                            <button
                                onClick={() => setStep(4)}
                                className="px-6 py-2 bg-gradient-primary text-white rounded-lg shadow-sm transition hover:shadow-md"
                            >
                                Next Step
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div
                        key="step4"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-[#0097E821] p-6 md:p-8 rounded-2xl shadow-card space-y-6 transition"
                    >
                        <h2 className="text-xl font-semibold">Review & Submit</h2>

                        {/* Basic Information */}
                        <div className="p-4 bg-background rounded-lg shadow relative">
                            <h3 className="font-semibold mb-2">Basic Information</h3>
                            <button
                                onClick={() => setStep(1)}
                                className="absolute top-2 right-2 text-gradient-primary text-sm font-medium"
                            >
                                Edit
                            </button>
                            <p>First Name: {formData.firstName}</p>
                            <p>Last Name: {formData.lastName}</p>
                            <p>Gender: {formData.gender}</p>
                            <p>Designation: {formData.designation}</p>
                            <p>Email: {formData.email}</p>
                            <p>Date of Birth: {formData.dob}</p>
                        </div>

                        {/* Address & Contact */}
                        <div className="p-4 bg-background rounded-lg shadow relative">
                            <h3 className="font-semibold mb-2">Address & Contact</h3>
                            <button
                                onClick={() => setStep(2)}
                                className="absolute top-2 right-2 text-gradient-primary text-sm font-medium"
                            >
                                Edit
                            </button>
                            <p>Country: {formData.country}</p>
                            <p>City: {formData.city}</p>
                            <p>Street: {formData.street}</p>
                            <p>Phone: {formData.phone}</p>
                            <p>Emergency Name: {formData.emergencyName}</p>
                            <p>Emergency Number: {formData.emergencyNumber}</p>
                            <p>Relation: {formData.emergencyRelation}</p>
                        </div>

                        {/* Work Details */}
                        <div className="p-4 bg-background rounded-lg shadow relative">
                            <h3 className="font-semibold mb-2">Work Details</h3>
                            <button
                                onClick={() => setStep(2)}
                                className="absolute top-2 right-2 text-gradient-primary text-sm font-medium"
                            >
                                Edit
                            </button>
                            <p>Experience: {formData.workExperience}</p>
                            <p>Preferred Area: {formData.preferredArea}</p>
                            <p>Hourly Rate: {formData.hourlyRate}</p>
                            <p>Shift: {formData.availableShift}</p>
                            <p>Certification: {formData.certification?.name || "N/A"}</p>
                        </div>

                        {/* Services */}
                        <div className="p-4 bg-background rounded-lg shadow relative">
                            <h3 className="font-semibold mb-2">Selected Services</h3>
                            <button
                                onClick={() => setStep(3)}
                                className="absolute top-2 right-2 text-gradient-primary text-sm font-medium"
                            >
                                Edit
                            </button>
                            <p>{formData.services.length ? formData.services.join(", ") : "None"}</p>
                        </div>


                        <div className="flex justify-between">
                            <button
                                onClick={() => setStep(3)}
                                className="px-6 py-2 bg-muted text-muted-foreground rounded-lg transition hover:shadow-sm"
                            >
                                Back
                            </button>
                            <button
                                onClick={() => alert("Nurse Added!")}
                                className="px-6 py-2 bg-gradient-primary text-white rounded-lg shadow-sm transition hover:shadow-md"
                            >
                                Submit
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
