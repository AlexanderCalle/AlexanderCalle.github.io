import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { timeline } from '@/lib/data/timeline'
import { Calendar, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

const TimelineSection = () => {
  return (
    <section className="py-24 rounded-lg bg-muted/50">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Timeline</h2>
          <p className="text-lg text-muted-foreground">My journey through education and career</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="inline-block max-w-md lg:min-w-[400px]">
                    <CardHeader className="pb-3">
                      <div className={
                        cn("flex items-center gap-2 text-sm text-muted-foreground",
                          index % 2 === 0 ? "justify-end" : "justify-start"
                        )
                      }>
                        <Calendar className="w-4 h-4" />
                        {item.year}
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className={cn("flex flex-col pt-0 space-y-2",
                      index % 2 === 0 ? "items-end" : "items-start" 
                    )}>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {item.organization}
                      </div>
                      {item.description && (
                        <p className='text-muted-foreground'>{item.description}</p>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div
                    className={`w-4 h-4 rounded-full border-4 border-background ${
                      item.type === "education"
                        ? "bg-blue-500"
                        : item.type === "work"
                          ? "bg-green-500"
                          : "bg-purple-500"
                    }`}
                  ></div>
                </div>

                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimelineSection