# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SGA Closed-Loop AI Sales Intelligence Engine (SGA-CLAISIE) is an autonomous sales and marketing ecosystem that transforms historical sales conversations into a self-improving revenue generation machine. The system processes 1,500+ Fathom sales recordings to create predictive intelligence and automated sales workflows.

## Technology Stack

### Core Infrastructure
- **Workflow Orchestration**: n8n with tunnel mode for webhook processing and automation
- **Database**: Supabase with pgvector extension for vector embeddings and semantic search
- **AI Processing**: OpenAI GPT-4o for transcript analysis and content generation
- **Embeddings**: text-embedding-3-large for semantic search capabilities

### Key Integrations
- **Fathom API**: Real-time webhook processing for meeting transcripts and summaries
- **CRM Systems**: HubSpot/Salesforce API integration
- **Social Media**: LinkedIn, Facebook, Twitter APIs for automated posting
- **Email Marketing**: SendGrid/Mailgun for campaign automation
- **Calendar**: Google Calendar/Calendly integration for automated booking

## Architecture Overview

The system follows a 5-phase architecture:

1. **Sales Intelligence Factory**: Processes Fathom webhooks and extracts structured data
2. **Content Distribution Engine**: Generates and publishes social media content
3. **Lead Qualification Engine**: Scores and nurtures leads based on ICP matching
4. **Automated Booking Engine**: Schedules meetings for qualified prospects
5. **Closed-Loop Validation**: Tracks outcomes and improves model accuracy

## Development Environment

### n8n Setup
```bash
# Run n8n with tunnel mode for webhook development
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  docker.n8n.io/n8nio/n8n \
  start --tunnel
```

### Database Setup
```bash
# Supabase local development
npx supabase init
npx supabase start
npx supabase db reset
```

## Core Database Schema

The system uses the following key entities:

- **meetings**: Stores Fathom meeting data, transcripts, and outcomes
- **documents**: Contains processed content with vector embeddings for semantic search
- **icp_profiles**: Ideal Customer Profiles generated from successful sales patterns
- **leads**: Contact information with AI-generated scoring and qualification status

Vector embeddings use 3072-dimensional vectors from OpenAI's text-embedding-3-large model.

## Key Workflows

### Webhook Processing
All Fathom webhooks require HMAC SHA-256 signature validation using the webhook secret. The system processes:
- Meeting transcripts
- AI-generated summaries
- Extracted action items
- Participant metadata

### AI Analysis Pipeline
Uses GPT-4o with JSON mode to extract structured data from transcripts:
- ICP characteristics
- Pain points and objections
- Buying signals and timeline indicators
- Decision maker identification

### Content Generation
Transforms meeting insights into platform-specific social media content with automated posting schedules.

## Security Requirements

- OAuth 2.0 authentication for all external integrations
- TLS 1.3 for data in transit, AES-256 for data at rest
- HMAC SHA-256 signature validation for webhooks
- GDPR/CCPA compliance for customer data handling

## Performance Targets

- API endpoints: <2 second response time
- Webhook processing: 100+ events/hour capacity
- Vector search: <500ms response time
- System availability: 99.5% uptime

## Key Success Metrics

- Lead scoring accuracy: 85%+ target
- Sales conversion improvement: 40%+ increase
- Manual operation reduction: 30+ hours/week saved
- Content generation: 500+ qualified leads monthly

## Business Logic

The system's core intelligence comes from analyzing successful sales patterns in the historical dataset to:
1. Automatically generate and refine ICP profiles
2. Score new leads against successful patterns
3. Generate authentic content from actual customer conversations
4. Predict optimal engagement timing and messaging

This closed-loop approach ensures continuous improvement as new sales data feeds back into the model training process.