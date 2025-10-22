import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CouponCard() {
  const couponCode = "BIRD25OFF"; // ← 表示したいクーポンコード

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-xl shadow-lg rounded-2xl">
        <CardContent className="flex flex-col md:flex-row justify-between items-center p-6 gap-6">
          {/* 左：テキスト部分 */}
          <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto">
            <h2 className="text-2xl font-bold text-gray-800 md:mr-6">
              Bird Proxies
            </h2>

            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <span className="text-gray-700 font-medium">Coupon code:</span>
              <input
                type="text"
                value={couponCode}
                readOnly
                className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 w-36 text-center text-gray-800 font-semibold cursor-default select-all"
              />
            </div>
          </div>

          {/* 右：ボタン */}
          <Button
            onClick={() => window.open("https://birdproxies.com", "_blank")}
            className="text-white bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg shadow transition"
          >
            Webサイトへアクセス
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
