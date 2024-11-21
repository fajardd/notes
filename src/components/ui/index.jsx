import { AnimatePresence, motion } from "framer-motion";

export const OutlineInput = ({
  label,
  id,
  type = "text",
  onChange,
  className,
  value,
  name,
  required = false,
}) => {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id}>{label}</label>
      <input
        required={required}
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`bg-gray-50 border w-full rounded-md pl-2 p-3 ${className}`}
      />
    </div>
  );
};

export const Steps = ({ children, index }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
