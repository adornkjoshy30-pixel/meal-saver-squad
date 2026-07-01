import { ShoppingBag, UtensilsCrossed } from "lucide-react";

type OrderMethod = "pickup_only" | "dine_in_only" | "both";

interface OrderMethodBadgeProps {
  method: OrderMethod;
  variant?: "badge" | "detail";
}

const orderMethodLabels: Record<OrderMethod, string> = {
  pickup_only: "Pickup Only",
  dine_in_only: "Dine-In Only",
  both: "Pickup or Dine-In",
};

const orderMethodStyles: Record<OrderMethod, { bgColor: string; textColor: string; borderColor: string }> = {
  pickup_only: {
    bgColor: "bg-[hsl(var(--info-bg))]",
    textColor: "text-[hsl(var(--info-fg))]",
    borderColor: "border-[hsl(var(--info-border))]",
  },
  dine_in_only: {
    bgColor: "bg-warning/10",
    textColor: "text-warning",
    borderColor: "border-warning/30",
  },
  both: {
    bgColor: "bg-accent",
    textColor: "text-accent-foreground",
    borderColor: "border-primary/20",
  },
};

const orderMethodDescriptions: Record<OrderMethod, string> = {
  pickup_only: "Pick up your order at the restaurant",
  dine_in_only: "Enjoy your meal at the restaurant",
  both: "Choose pickup or dine at the restaurant",
};

export const OrderMethodBadge = ({ method, variant = "badge" }: OrderMethodBadgeProps) => {
  const styles = orderMethodStyles[method];
  const label = orderMethodLabels[method];

  const renderIcon = () => {
    if (method === "pickup_only") return <ShoppingBag className="w-3 h-3" />;
    if (method === "dine_in_only") return <UtensilsCrossed className="w-3 h-3" />;
    return (
      <>
        <ShoppingBag className="w-3 h-3" />
        <span>/</span>
        <UtensilsCrossed className="w-3 h-3" />
      </>
    );
  };

  const renderDetailIcon = () => {
    if (method === "pickup_only") return <ShoppingBag className="w-5 h-5" />;
    if (method === "dine_in_only") return <UtensilsCrossed className="w-5 h-5" />;
    return (
      <div className="flex items-center gap-1">
        <ShoppingBag className="w-4 h-4" />
        <UtensilsCrossed className="w-4 h-4" />
      </div>
    );
  };

  if (variant === "badge") {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${styles.bgColor} ${styles.textColor} border ${styles.borderColor}`}
      >
        {renderIcon()}
        <span>{label}</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl ${styles.bgColor} border ${styles.borderColor}`}>
      <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-background ${styles.textColor}`}>
        {renderDetailIcon()}
      </div>
      <div>
        <p className={`font-medium text-sm ${styles.textColor}`}>{label}</p>
        <p className="text-xs text-muted-foreground">{orderMethodDescriptions[method]}</p>
      </div>
    </div>
  );
};

export default OrderMethodBadge;
