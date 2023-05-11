#!/usr/bin/python3
"""
   rotate_2d_matrix function
"""


def rotate_2d_matrix(matrix):
    """rotate_2d_matrix function

    Args:
        matrix (list): 2D matrix to rotate
    """
    reversed_matrix = zip(*matrix[::-1])
    for i, j in enumrate(reverse_matrix):
        matrix[i] = list(j)
