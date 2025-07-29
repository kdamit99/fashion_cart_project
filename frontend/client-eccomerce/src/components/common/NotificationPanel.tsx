import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useEffect, useRef } from "react";

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const notifications = [
  {
    id: 1,
    title: "New Offer 🎉",
    message: "Flat 50% off on summer styles.",
    time: "2 mins ago",
    icon: "mdi:tag-heart",
  },
  {
    id: 2,
    title: "Order Shipped 📦",
    message: "Your order #1023 has been shipped.",
    time: "1 hr ago",
    icon: "mdi:truck-fast",
  },
  {
    id: 3,
    title: "Welcome 🎈",
    message: "Thanks for joining Fashion Cart!",
    time: "1 day ago",
    icon: "mdi:emoticon-happy-outline",
  },
];

export const NotificationPanel = ({
  isOpen,
  onClose,
}: NotificationPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={panelRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute top-14 right-4 w-80 bg-white rounded-xl shadow-2xl border border-teal-200 z-50 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-teal-50">
            <span className="font-semibold text-teal-800">Notifications</span>
            <button
              onClick={onClose}
              className="p-1 text-teal-500 hover:text-teal-800"
            >
              <Icon icon="mdi:close" width="18" />
            </button>
          </div>

          {/* Notification List */}
          <div className="max-h-72 overflow-y-auto overflow-x-hidden divide-y divide-teal-50">
            {notifications.map((n) => (
              <motion.div
                key={n.id}
                className="group flex items-start gap-3 p-4 hover:bg-teal-50 transition"
                whileHover={{ scale: 1.02 }}
              >
                <div className="mt-1 text-teal-600 flex-shrink-0">
                  <Icon icon={n.icon} width="20" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-teal-800 group-hover:text-teal-600 truncate">
                      {n.title}
                    </span>
                    <span className="text-xs text-teal-400 whitespace-nowrap">
                      {n.time}
                    </span>
                  </div>
                  <p className="text-sm text-teal-700 mt-1 truncate">
                    {n.message}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Action */}
          <div
            onClick={() => {}}
            className="cursor-pointer text-center py-3 text-sm font-medium text-teal-700 hover:bg-teal-50 transition"
          >
            View All Notifications
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
