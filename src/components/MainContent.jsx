import styles from './MainContent.module.scss';

const Step1Card = ({ title, description }) => (
  <div className={styles.baseCol}>
    <h4 className={styles.baseColTitle}>{title}</h4>
    <p className={styles.baseColDesc}>{description}</p>
  </div>
);

const WorkflowCard = ({ title, description }) => (
  <div className={styles.workflowCard}>
    <div className={styles.workflowHeader}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/logic-arrow.svg"
        alt=""
        className={styles.workflowIcon}
        aria-hidden="true"
      />
      <h4 className={styles.workflowTitle}>{title}</h4>
    </div>
    <p className={styles.workflowDesc}>{description}</p>
  </div>
);

const PortalCard = ({ title, description }) => (
  <div className={styles.workflowCard}>
    <div className={styles.workflowHeader}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/computer.svg"
        alt=""
        className={styles.workflowIcon}
        aria-hidden="true"
      />
      <h4 className={styles.workflowTitle}>{title}</h4>
    </div>
    <p className={styles.workflowDesc}>{description}</p>
  </div>
);

const AddCard = () => (
  <button type="button" className={styles.addCard}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/assets/add-circle.svg" alt="" aria-hidden="true" />
    <span>Add Registration Workflow</span>
  </button>
);

export default function MainContent() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo.png"
            alt="RainFocus Summit"
            className={styles.eventLogo}
          />
          <div className={styles.headerText}>
            <h1 className={styles.eventTitle}>RainFocus Summit</h1>
            <p className={styles.eventDate}>December 15th</p>
            <p className={styles.eventDate}>Lehi, Utah</p>
          </div>
        </div>

        <button type="button" className={styles.editBtn}>
          Edit event
        </button>
      </header>

      <section className={styles.intro} aria-labelledby="setup-heading">
        <h2 id="setup-heading" className={styles.introHeading}>
          Event setup guide
        </h2>
        <p className={styles.introCopy}>
          See the available list of modules below. We suggest that you start
          with the attendee module.
        </p>
      </section>

      <div className={styles.divider} role="presentation" />

      <section className={styles.module} aria-labelledby="attendee-heading">
        <div className={styles.moduleHeader}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/person-portal.svg"
            alt=""
            className={styles.moduleIcon}
            aria-hidden="true"
          />
          <h3 id="attendee-heading" className={styles.moduleTitle}>
            Attendee
          </h3>
        </div>

        <div className={styles.step}>
          <p className={styles.stepLabel}>
            <strong>Step 1:</strong> Base settings.
          </p>
          <div className={styles.baseCard}>
            <Step1Card
              title="General"
              description="Define Attendee types &amp; attributes"
            />
            <Step1Card
              title="Title"
              description="Description that explains the value goes here. Description that explains the value goes here."
            />
            <Step1Card
              title="Title"
              description="Description that explains the value goes here. Description that explains the value goes here."
            />
          </div>
        </div>

        <div className={styles.step}>
          <p className={styles.stepLabel}>
            <strong>Step 2:</strong> Build registration workflows.
          </p>
          <div className={styles.cardGrid}>
            <WorkflowCard
              title="Attendee Registration"
              description="Start by creating a general registration workflow"
            />
            <WorkflowCard
              title="Attendee Registration"
              description="Start by creating a general registration workflow"
            />
            <WorkflowCard
              title="Attendee Registration"
              description="Start by creating a general registration workflow"
            />
          </div>
          <div className={styles.cardGrid}>
            <AddCard />
            <span aria-hidden="true" className={styles.gridSpacer} />
            <span aria-hidden="true" className={styles.gridSpacer} />
          </div>
        </div>

        <div className={styles.step}>
          <p className={styles.stepLabel}>
            <strong>Step 3:</strong> Design post-registration experiences.
          </p>
          <div className={styles.cardGrid}>
            <PortalCard
              title="Attendee Portal"
              description="Manage the portal that attendees will see after they've register for your event."
            />
            <span aria-hidden="true" className={styles.gridSpacer} />
            <span aria-hidden="true" className={styles.gridSpacer} />
          </div>
        </div>
      </section>
    </main>
  );
}
