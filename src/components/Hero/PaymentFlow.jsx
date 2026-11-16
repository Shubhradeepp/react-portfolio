import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import styles from "./PaymentFlow.module.css";

// A request always passes through the first two steps, then ends in one of three outcomes.
const SEQUENCE = ["request", "bank", "ok", "request", "bank", "pending", "request", "bank", "failed"];

export const PaymentFlow = () => {
  const reduced = usePrefersReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduced) return undefined;
    const id = setInterval(() => setStep((s) => (s + 1) % SEQUENCE.length), 1400);
    return () => clearInterval(id);
  }, [reduced]);

  const active = reduced ? null : SEQUENCE[step];
  const is = (id) => (active === id ? "true" : "false");

  return (
    <figure className={styles.card}>
      <figcaption className={styles.caption}>
        <span className={styles.title}>Payment flow I built at Caerus</span>
        <span className={styles.sub}>Bank-integrated payments with automatic reconciliation and retries</span>
      </figcaption>

      <div className={styles.flow} role="group" aria-label="Payment request, bank API, then one of three outcomes">
        <div className={styles.node} data-active={is("request")}>
          <strong>Payment request</strong>
          <span>Spring Boot API starts the payment and OTP step</span>
        </div>
        <div className={styles.line} aria-hidden="true" />
        <div className={styles.node} data-active={is("bank")}>
          <strong>ICICI Bank API</strong>
          <span>OTP, payment execution and status inquiry</span>
        </div>
        <div className={styles.line} aria-hidden="true" />
        <div className={styles.outcomes}>
          <div className={styles.outcome} data-tone="ok" data-active={is("ok")}>
            <strong>Completed</strong>
            <span>Transaction tracked</span>
          </div>
          <div className={styles.outcome} data-tone="warn" data-active={is("pending")}>
            <strong>Pending queue</strong>
            <span>Reconciled automatically</span>
          </div>
          <div className={styles.outcome} data-tone="bad" data-active={is("failed")}>
            <strong>Failure queue</strong>
            <span>Eligible failures retried</span>
          </div>
        </div>
      </div>

      <p className={styles.result}>Result: 60% less manual effort in handling pending and failed payments.</p>
    </figure>
  );
};
