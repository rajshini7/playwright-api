# Playwright API Automation Framework (with Newman)

## OVERVIEW

This project is a **modern API automation framework** built using **Playwright for API testing** and **Newman for Postman-based execution and reporting**.

It provides:
- Deterministic API validation
- Clear separation of test logic and API definitions
- Fast local execution
- CI-ready automation with downloadable HTML reports
- A clean developer workflow suitable for real-world teams

The framework is designed to work **identically on local machines and in CI pipelines**.

---

## WHY THIS PROJECT

API automation in many teams suffers from:

- Over-reliance on Postman without CI integration
- Flaky or slow test frameworks
- Poor visibility of failures in CI
- No standardized reporting artifacts
- Hard-to-maintain scripts

### This project solves those problems by:

- Using **Playwright’s request API** for fast, reliable API tests
- Supporting **Postman collections via Newman**
- Generating **HTML reports** for audit and debugging
- Running cleanly in **GitHub Actions**
- Enforcing a **structured, maintainable test layout**

This makes it ideal for:
- API regression testing
- CI health checks
- Contract validation
- Demo, audit, and reporting purposes

---

## CORE CONCEPTS

### 1️⃣ Playwright API Testing
- Uses Playwright’s built-in `request` context
- Supports REST APIs without browser overhead
- Provides strong assertions and fast execution

### 2️⃣ Postman + Newman Integration
- Reuses existing Postman collections
- Runs collections in CI using Newman
- Produces a **self-contained HTML report**

### 3️⃣ Deterministic CI Execution
- Fresh environment on every run
- No dependency on local state
- Same behavior locally and in CI

### 4️⃣ Artifact-Based Reporting
- Newman HTML reports stored as CI artifacts
- Reports are downloadable and viewable offline
- Clear visibility into API failures

---

## TECH STACK

- **Node.js**
- **TypeScript**
- **Playwright** (API testing)
- **Newman** (Postman execution)
- **GitHub Actions** (CI/CD)
- **HTML** (Newman report output)

---

## FOLDER STRUCTURE

playwright-api/
│
├── .github/
│   └── workflows/
│       └── ci.yml                 # GitHub Actions CI pipeline
│
├── postman/
│   ├── CRUD_VAL_postman_collection.json
│   └── JSONplaceholder_postman_environment.json
│
├── reports/
│   └── newman/
│       └── newman-report.html     # Generated Newman HTML report
│
├── tests/
│   └── api/
│       └── crud.spec.ts           # Playwright API tests
│
├── playwright.config.ts
├── tsconfig.json
├── package.json
├── package-lock.json
├── requirements.txt
├── .gitignore
└── README.md
```

## HOW TO EXECUTE

🔹 Install Dependencies
npm install

🔹 Run Playwright API Tests (Local)
npm run test:api

🔹 Run Newman Collection (Local)
npm run newman:run


This generates:

reports/newman/newman-report.html

```

## CI/CD READY

This project includes a GitHub Actions pipeline that:

Installs dependencies

Runs Playwright API tests

Executes Newman collections

Generates HTML reports

Uploads reports as CI artifacts

CI is triggered on:

Push to development

Push to main

Pull requests targeting development or main

```

## EXPECTED OUTPUT
✅ On Success

Playwright API tests pass

Newman collection runs successfully

HTML report generated

CI pipeline passes

❌ On Failure

CI fails intentionally

Newman HTML report still generated

Failure details visible in report

Artifacts downloadable from GitHub Actions

```

## BRANCHING STRATEGY
Main
├── development

🔹 main

Stable, production-ready code

CI-validated

Protected branch (recommended)

🔹 development

Active development

Feature integration

CI runs on every push

## CREATED BY

Rajeev
Automation Engineering | Playwright | API Testing | CI/CD | Systems Thinking