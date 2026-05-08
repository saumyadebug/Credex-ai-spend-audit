export type UseCase = 'coding' | 'writing' | 'data' | 'research' | 'mixed'

export type ToolName =
    | 'cursor'
    | 'github_copilot'
    | 'claude'
    | 'chatgpt'
    | 'anthropic_api'
    | 'openai_api'
    | 'gemini'
    | 'windsurf'

export interface ToolInput {
    tool: ToolName
    plan: string
    seats: number
    monthlySpend: number
}

export interface SpendFormData {
    tools: ToolInput[]
    teamSize: number
    useCase: UseCase
}

export interface AuditRecommendation {
    tool: ToolName
    currentPlan: string
    currentMonthlySpend: number
    recommendedAction: 'downgrade' | 'switch' | 'optimal' | 'use_credits'
    recommendedPlan?: string
    recommendedTool?: ToolName
    monthlySavings: number
    annualSavings: number
    reason: string
}

export interface AuditResult {
    recommendations: AuditRecommendation[]
    totalMonthlySavings: number
    totalAnnualSavings: number
    isOptimal: boolean
    highSavingsCase: boolean  // true if > $500/mo savings
    summary?: string          // AI-generated, optional
}

export interface Lead {
    email: string
    companyName?: string
    role?: string
    teamSize?: number
    auditId: string
}