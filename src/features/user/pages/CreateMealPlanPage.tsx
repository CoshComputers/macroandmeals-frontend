import { Layout } from '@/core/components/Layout';
import { CreateMealPlanForm } from '@/features/user/components/CreateMealPlanForm';

export function CreateMealPlanPage() {
    return (
        <Layout>
            <div className="p-4 max-w-2xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Create Your Personalized Meal Plan</h1>
                <CreateMealPlanForm />
            </div>
        </Layout>
    );
}
