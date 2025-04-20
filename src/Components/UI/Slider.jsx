import * as React from "react"
import { Card, CardContent } from "./card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel"
import Autoplay from "embla-carousel-autoplay"
import imgs from "../Apis/Imgs.json"

export function Slider() {
  return (
    <div className="relative w-full flex justify-center items-center mx-auto overflow-hidden my-10">
      <Carousel 
      plugins={[
        Autoplay({
          delay: 1500,
        }),
      ]}
      className="w-full ">
        <CarouselContent>
          {
            imgs.map((img,index)=>(
              <CarouselItem key={index}>
              <div className="flex justify-center items-center">
                <Card className="w-[65rem] h-[200px] flex justify-center items-center p-4 sm:max-w-full sm:h-[450px] border-none">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={img.img} alt={`Slider ${index + 1}`} className=" w-full  rounded-xl" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
