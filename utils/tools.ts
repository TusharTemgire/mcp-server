export async function toolHandler(toolName: string, input: string): Promise<string>
{
    if (toolName === 'calculator') {
        try{
            const result = eval(input);
            return `Result: ${result}`;
        } catch {
            return 'Invalid expression';
        
        }
        }

        return `Unknown tool: ${toolName}`;
    }
