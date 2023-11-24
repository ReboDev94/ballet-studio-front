import React, { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { PAGINATION_CLASSES } from './styles';
import { IPagination } from './interfaces';
import { VARIANT_PRIMARY } from '../constants/variants';
import PaginationItem from './PaginationItem';
import PaginationButton from './PaginationButton';

const Pagination: React.FC<IPagination> = ({
  currentPage = 1,
  pageCount = 1,
  visiblePages = 5,
  variant = VARIANT_PRIMARY,
  onChange,
}) => {
  const previuosPage = () => {
    if (currentPage === 1) return;
    onChange(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage === pageCount) return;
    onChange(currentPage + 1);
  };

  const setPage = (page: number) => {
    if (page === currentPage) return;
    onChange(page);
  };

  const hasPreviousPage = useMemo(
    () => currentPage > 1 && pageCount > 1,
    [currentPage],
  );

  const hasNextPage = useMemo(
    () => currentPage < pageCount && pageCount > 1,
    [currentPage],
  );

  const startPage = useMemo(() => {
    if (currentPage === 1) return 1;
    if (currentPage === pageCount) {
      return currentPage - visiblePages + (pageCount < visiblePages ? 2 : 1);
    }
    return currentPage - 1;
  }, [currentPage, pageCount, visiblePages]);

  const endPage = useMemo(() => {
    return Math.min(startPage + visiblePages - 1, pageCount);
  }, [visiblePages, pageCount, startPage]);

  const pages = useMemo(() => {
    const elements: number[] = [];
    for (let index = startPage; index <= endPage; index++) {
      elements.push(index);
    }
    return elements;
  }, [startPage, endPage]);

  return (
    <div className={twMerge(PAGINATION_CLASSES)}>
      <PaginationButton
        disabled={!hasPreviousPage}
        variant={variant}
        positionArrow="left"
        type="button"
        onClick={previuosPage}
      >
        Ant.
      </PaginationButton>
      {pages.map(el => (
        <PaginationItem
          key={el}
          page={el}
          variant={variant}
          active={currentPage === el}
          onClick={() => setPage(el)}
          type="button"
        />
      ))}
      <PaginationButton
        disabled={!hasNextPage}
        variant={variant}
        positionArrow="right"
        onClick={nextPage}
        type="button"
      >
        Sig.
      </PaginationButton>
    </div>
  );
};

export default Pagination;
