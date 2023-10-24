'use client';

import CircleIcon from "@components/ui/CircleIcon"
import Link from "next/link"
import React from 'react';
import { usePagination, DOTS } from '@app/usePagination';
import { usePathname, useSearchParams } from 'next/navigation'

const DirectionLink = (
  {
    label,
    disabled
  }: {
    label?: "Back" | "Next" | number
    disabled?: boolean
  }) => {
  const theme = disabled ? "lavender-mist-disabled" : "lavender-mist"
  return <div className={`flex gap-2.5 items-center justify-center ${label == "Next" && "flex-row-reverse"} ${label == "Next" && "flex-row-reverse"}`}>
    <CircleIcon direction={(label == "Next" ? 'right' : 'left')} icon="arrow" theme={theme} />
    <span className={`${disabled && "opacity-[0.35]"} text-base font-basis-grotesque-bold font-bold leading-[30px] tracking-[0.195px]`}>{label}</span>
  </div>
}

export default function Paginator(props: { totalCount: number, siblingCount?: number, currentPage: number, pageSize: number, className?: string }) {
  const { totalCount, siblingCount = 1, currentPage, pageSize } = props;
  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });
  const pathname = usePathname()
  const params = useSearchParams()
  const current_page = Number(params.get("page")) || 1

  if (!paginationRange) {
    return null;
  } else if (currentPage === 0 || paginationRange && paginationRange.length < 2) {
    return null;
  }

  let url = pathname + "?";

  if (params.get("category")) {
    url += "category=" + params.get("category")
  }

  let back_url = url + "&page=" + (current_page - 1)
  let next_url = url + "&page=" + (current_page + 1)

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex justify-start">
        {current_page > 1 &&
          <Link href={back_url} className="inline-flex justify-between items-center gap-2.5 h-[44px]">
            <DirectionLink label="Back" />
          </Link>
        }
        {current_page == 1 &&
          <DirectionLink disabled={true} label="Back" />
        }
      </div>

      <div className="flex justify-center gap-5 max-md:hidden">
        {paginationRange.map(pageNumber => {
          if (pageNumber === DOTS) {
            return <span key={pageNumber} className="flex justify-center items-center">...</span>
          }
          return (
            <Link key={pageNumber} href={url + "&page=" + (pageNumber)}>
              <CircleIcon key={pageNumber} icon={pageNumber} theme={(pageNumber == current_page ? "royal-purple-active" : "lavender-mist")} />
            </Link>
          )
        })}
      </div>
      <div className="justify-end">
        <div className="flex justify-center items-center gap-2.5 h-[44px]">

          {current_page !== lastPage &&
            <Link href={next_url}>
              <DirectionLink disabled={false} label="Next" />
            </Link>
          }

          {current_page === lastPage &&
            <DirectionLink disabled={true} label="Next" />
          }
        </div>
      </div>

    </div>
  );
};

