import ContentPage from "../component/elements/content";
import MainLayout from "../component/layout/MainLayout";



const GoalsPage = () => {
  return (
    <MainLayout type="goals">
      <div className="space-y-8">
        {/* Top Content: Grid 2x1 */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Goals</h2>
          <div className="grid grid-cols-2 gap-4">
            <ContentPage title="" content="" />
            <ContentPage
              title=""
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus..."
            />
          </div>
        </div>

        {/* Bottom Content: Grid 3x2 */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Expenses Goals by Category
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <ContentPage title="" content="" />
            <ContentPage title="" content="" />
            <ContentPage
              title=""
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus..."
            />
            <ContentPage title="" content="" />
            <ContentPage
              title=""
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni neque quam alias enim ullam deserunt ducimus..."
            />
            <ContentPage title="" content="" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GoalsPage;